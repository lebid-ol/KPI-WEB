function checkData(data) {
    /* перевірка заповненості полів*/
    if (data.fullName != null && data.fullName.value.length < 3 )
    {
        document.getElementById("fullName").style.setProperty("border", "2px solid red")
        return false;}
    else {
        if (!(/[A-ZА-Я][\wа-я]+\s[А-Я]\.[А-Я]\./.test(data.full_name.value))){
            document.getElementById("fullName").style.setProperty("border", "2px solid red")
            return false;
        } else {
            document.getElementById("fullName").style.setProperty("border", "")
        }
    }
    if (data.phone != null && data.phone.value.length !== 15) {
        document.getElementById("phone").style.setProperty("border", "2px solid red")
        return false;
    } else {
        if (!(/\(\d{3}\)-\d{3}-\d{2}-\d{2}/.test(data.phone.value))) {
            document.getElementById("phone").style.setProperty("border", "2px solid red")
            return false;
        } else {
            document.getElementById("phone").style.setProperty("border", "")
        }
    }

    if (data.faculty != null && data.faculty.value.length < 5) {
        document.getElementById("faculty").style.setProperty("border", "2px solid red")
        return false;
    } else {
        if (!(/[А-Я][а-я\s\']{9,}/.test(data.faculty.value))) {
            document.getElementById("faculty").style.setProperty("border", "2px solid red")
            return false;
        } else {
            document.getElementById("faculty").style.setProperty("border", "")
        }
    }

    if (data.birthDate != null && data.birthDate.value.length !== 10) {
        document.getElementById("birthDate").style.setProperty("border", "2px solid red")
        return false;
    } else {
        if (!(/\d{2}\.\d{2}\.\d{4}/.test(data.birthDate.value))) {
            document.getElementById("birthDate").style.setProperty("border", "2px solid red")
            return false;
        } else {
            document.getElementById("birthDate").style.setProperty("border", "")
        }
    }

    if (data.addressString != null && data.addressString.value.length < 6) {
        document.getElementById("addressString").style.setProperty("border", "2px solid red")
        return false;
    } else {
        if (!(/м\.\s[А-Я][а-я]+/.test(data.addressString.value))) {
            document.getElementById("addressString").style.setProperty("border", "2px solid red")
            return false;
        } else {
            document.getElementById("addressString").style.setProperty("border", "")
        }
    }
    return true;
}