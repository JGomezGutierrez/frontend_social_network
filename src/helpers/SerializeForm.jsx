//recinimos un target con el formulario 

export const SerializeForm  = (form) => {

    const formData = new FormData(form);

    //construir el objeto vacio primero
    const completeObj = {};

    for (let [name, value] of formData) {
        completeObj[name] = value;
    }

    //Retornamos los datos del fomulario
    return completeObj;
}