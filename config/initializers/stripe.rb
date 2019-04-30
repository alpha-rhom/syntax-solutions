Rails.configuration.stripe = {
  publishable_key: 'pk_test_OwWjuHa0qjaV0l10959p9vzU00uw0J9wE8',
  secret_key: 'sk_test_ty7qhPcFJd4uFGYvdCmZg58C008XPO1qcX'
}
Stripe.api_key = Rails.configuration.stripe[:secret_key]