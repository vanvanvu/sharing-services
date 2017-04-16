import braintree
import json, pika, time


@app.route("/client_token", methods=["GET"])
def client_token():
    return braintree.ClientToken.generate()

@app.route("/checkout", methods=["POST"])
def create_purchase():
    nonce_from_the_client = request.form["payment_method_nonce"]


@app.route("/create_transaction", methods=["POST"])
def create_transaction():
    result = braintree.Transaction.sale({
        "amount": "1000.00",
        "credit_card": {
            "number": request.form["number"],
            "cvv": request.form["cvv"],
            "expiration_month": request.form["month"],
            "expiration_year": request.form["year"]
        },
        "options": {
            "submit_for_settlement": True
        }
    })
    if result.is_success:
        return "<h1>Success! Transaction ID: {0}</h1>".format(result.transaction.id)
    else:
        return "<h1>Error: {0}</h1>".format(result.message)

'''
Message format
msg = {
    "token-type": "string",
    "data": "string"
}
'''
def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)
    time.sleep(body.count(b'.'))
    print(" [x] Done")
    ch.basic_ack(delivery_tag=method.delivery_tag)

def main():
    try:
        configure = json.loads(open('./braintree-account-sandbox.json').read())

        braintree.Configuration.configure(braintree.Environment.Sandbox,
                                          merchant_id=configure['merchant_id'],
                                          public_key=configure['public_key'],
                                          private_key=configure['private_key'])
    except:
        print 'Can not load braintree configuration'
        return

    try:
        connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'))
        channel = connection.channel()

        channel.queue_declare(queue='merchant_task_queue', durable=True)
        print(' [*] Waiting for messages. To exit press CTRL+C')
        channel.basic_qos(prefetch_count=1)
        channel.basic_consume(callback,
                              queue='merchant_task_queue')
        channel.start_consuming()
    except:
        print 'Can not connect RabbitMQ Server'
        return

if __name__ == '__main__':
    main()
