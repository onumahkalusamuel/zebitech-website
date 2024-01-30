(async function () {
    "use strict";

    let forms = document.querySelectorAll('.php-email-form');

    forms.forEach(function (e) {
        e.addEventListener('submit', async function (event) {
            event.preventDefault();

            let thisForm = this;

            let action = thisForm.getAttribute('action');

            if (!action) {
                displayError(thisForm, 'The form action property is not set!');
                return;
            }
            thisForm.querySelector('.loading').classList.add('d-block');
            thisForm.querySelector('.error-message').classList.remove('d-block');
            thisForm.querySelector('.sent-message').classList.remove('d-block');

            const formData = new FormData(thisForm);

            // Converting form data to JSON
            const jsonFormData = {};
            formData.forEach((value, key) => {
                jsonFormData[key] = value;
            });

            await php_email_form_submit(thisForm, action, jsonFormData);
        });
    });

    function mapToQueryString(map) {
        return Object.entries(map)
            .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
            .join('&');
    }
    async function php_email_form_submit(thisForm, action, jsonFormData) {


        try {
            const response = await axios.get(`${action}`, { params: jsonFormData });
            if (response.status === 200) {
                const data = response.data;
                thisForm.querySelector('.loading').classList.remove('d-block');
                if (data.trim() === 'OK') {
                    thisForm.querySelector('.sent-message').classList.add('d-block');
                    thisForm.reset();
                } else {
                    throw new Error(data ? data : `Form submission failed and no error message returned from: ${action}`);
                }
            } else {
                throw new Error(`${response.status} ${response.statusText} ${response.config.url}`);
            }
        } catch (error) {
            displayError(thisForm, error);
        }

        //     const req = await axios.post("url", jsonFormData, {headers: {'Content-Type': 'application/json'}})
    }

    function displayError(thisForm, error) {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').innerHTML = error;
        thisForm.querySelector('.error-message').classList.add('d-block');
    }

})();
