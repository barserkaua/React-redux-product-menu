const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    // check that only numbers are entered
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            // when we find not a number, we change it to empty signs
            item.value = item.value.replace(/\D/, '');
        })
    });
};

export default checkNumInputs;