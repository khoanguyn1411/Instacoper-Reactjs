function validate(props) {

    const {
        btnSubmit,
        rules,
        groupInput,
        onSubmit,
        errorStyles,
    } = props

    // Lưu lại các rules cho mỗi input
    const selectorRules = {};


    // Hàm xác định + hiển thị message
    const toggleMessage = (inputElement, rule) => {
        let parentElement = inputElement.parentElement
        const value = inputElement.value

        let errorMessage
        const rules = selectorRules[rule.key]

        if (rule.type === 'selectBox') {
            parentElement = inputElement.parentElement.parentElement
        }

        for (let i = 0; i < rules.length; i++) {
            errorMessage = rules[i](value)
            if (errorMessage) break
        }

        let errorElement = parentElement.querySelector('span')

        if (errorMessage) {
            errorElement.textContent = errorMessage
            if (rule.type === 'selectBox') {

                const newEle = parentElement.querySelector('#selectBox')
                newEle.classList.add(errorStyles)
            } else {
                inputElement.classList.add(errorStyles)
            }
            return false
        } else {
            errorElement.textContent = ''
            if (rule.type === 'selectBox') {
                const newEle = parentElement.querySelector('#selectBox')
                newEle.classList.remove(errorStyles)
            } else {
                inputElement.classList.remove(errorStyles)
            }
            return true
        }


    }


    // Validate on submit
    const handleSubmit = () => {
        let isValidForm = true
        rules.forEach(rule => {
            let inputElement = rule.selector
            let isValue = toggleMessage(inputElement, rule)
            if (!isValue) {
                isValidForm = false
            }
        })
        if (isValidForm) {
            onSubmit()
        }
    }

    btnSubmit.addEventListener('click', handleSubmit)


    // Lặp qua các sự kiện
    if (groupInput) {
        rules.forEach(rule => {
            // Lưu lại các rules cho mỗi input
            if (!Array.isArray(selectorRules[rule.key])) {
                selectorRules[rule.key] = [rule.test]
            } else {
                selectorRules[rule.key] = [...selectorRules[rule.key], rule.test]
            }
            const inputElement = rule.selector

            if (rule.type === 'selectBox') {
                if (inputElement) {
                    inputElement.addEventListener('change', () => {
                        toggleMessage(inputElement, rule)
                    })
                }

            } else {
                if (inputElement) {
                    inputElement.addEventListener('blur', () => {
                        toggleMessage(inputElement, rule)
                    })

                    inputElement.addEventListener('input', () => {
                        const parentElement = inputElement.parentElement
                        const errorElement = parentElement.querySelector('span')
                        errorElement.textContent = ''
                        inputElement.classList.remove(errorStyles)
                    })
                }
            }
        });
    }


}



validate.isRequired = function (selector, key) {
    return {
        selector,
        key,
        test: (value) => {
            if (value.trim() === '' || value.trim() === null || value.trim() === undefined) {
                return 'Vui lòng nhập trường này! '
            }
        }
    }
}


validate.isEmail = function (selector, key, message) {
    return {
        selector,
        key,
        test: (value) => {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    }
}


validate.isSelectBoxRequired = function (selector, key, defaultValue, type) {
    return {
        selector,
        key,
        test: (value) => {
            if (value === defaultValue) {
                return `Vui lòng nhập ${defaultValue}! `
            } else {
                return undefined
            }
        },
        type
    }
}






export default validate