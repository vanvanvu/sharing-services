import braintree
import json, pika


@app.route("/client_token", methods=["GET"])
def client_token():
    return braintree.ClientToken.generate()


@app.route("/checkout", methods=["POST"])
def create_purchase():
    nonce_from_the_client = request.form["payment_method_nonce"]


def main():
    try:
        configure = json.loads(open('./braintree-account-sandbox.json').read())

        braintree.Configuration.configure(braintree.Environment.Sandbox,
                                          merchant_id=configure['merchant_id'],
                                          public_key=configure['public_key'],
                                          private_key=configure['private_key'])
    except:
        print 'Can not load braintree configuration'


if __name__ == '__main__':
    main()
