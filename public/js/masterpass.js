(function($){
    function simplifyResponseHandler(data) {
        var $paymentForm = $("#simplify-payment-form");
        // Remove all previous errors
        $(".error").remove();
        // Check for errors
        if (data.error) {
            debugger
            // Show any validation errors
            if (data.error.code == "validation") {
                var fieldErrors = data.error.fieldErrors,
                        fieldErrorsLength = fieldErrors.length,
                        errorList = "";
                for (var i = 0; i < fieldErrorsLength; i++) {
                    errorList += "<div class='error'>Field: '" + fieldErrors[i].field +
                            "' is invalid - " + fieldErrors[i].message + "</div>";
                }
                // Display the errors
                $paymentForm.after(errorList);
            }
            // Re-enable the submit button
            $("#process-payment-btn").removeAttr("disabled");
        } else {
            debugger
            // The token contains id, last4, and card type
            var token = data["id"];
            // Insert the token into the form so it gets submitted to the server
            $paymentForm.append("<input type='hidden' name='simplifyToken' value='" + token + "' />");
            // Submit the form to the server
            $paymentForm.get(0).submit();
        }
    }
    function masterPassResponseHandler(data, status) {
        var $paymentForm = $("#simplify-payment-form");
        // Remove all previous errors
        $(".error").remove();
        // Check for errors
        if (data.error) {
            debugger
            // Show any validation errors
            if (data.error.code == "validation") {
                var fieldErrors = data.error.fieldErrors,
                    fieldErrorsLength = fieldErrors.length,
                    errorList = "";
                for (var i = 0; i < fieldErrorsLength; i++) {
                    errorList += "<div class='error'>Field: '" + fieldErrors[i].field +
                                "' is invalid - " + fieldErrors[i].message + "</div>";
                }
                // Display the errors
                $paymentForm.after(errorList);
            }
        } else {
            debugger
            console.log(data)
            // The token contains id, last4, and card type
            var token = data.cardToken["id"];
            // Insert the token into the form so it gets submitted to the server
            $paymentForm.append("<input type='hidden' name='simplifyToken' value='" + token + "' />");
            // Submit the form to the server
            $("#cc-number").val("XXXX-XXXX-XXXX-" + data.cardToken.card.last4);
            $("#cc-number").prop('disabled', true);
            $paymentForm.after("<div class='confirmation'>Please confirm your payment details before submitting</div>");
        }
    }

    function masterPassCanceledHandler () {
        console.log ("MasterPass canceled")
    }

    $(document).ready(function() {
        $("#simplify-payment-form").on("submit", function() {
            debugger
            // Disable the submit button
            $("#process-payment-btn").attr("disabled", "disabled");
            // Generate a card token & handle the response
            SimplifyCommerce.generateToken({
                key: "sbpb_MGMyNzFiOWEtMTFiZi00ZmM0LTkwOWUtZTc1OGFkMmMzOTFj",
                card: {
                    number: $("#cc-number").val(),
                    cvc: $("#cc-cvc").val(),
                    expMonth: $("#cc-exp-month").val(),
                    expYear: $("#cc-exp-year").val()
                }
            }, simplifyResponseHandler);
            // Prevent the form from submitting
            return false;
        });
        SimplifyCommerce.addMasterPassCheckoutButton("buy-with-masterpass-div", 
        "sbpb_MGMyNzFiOWEtMTFiZi00ZmM0LTkwOWUtZTc1OGFkMmMzOTFj", masterPassResponseHandler,
            masterPassCanceledHandler);
    });
})(jQuery)