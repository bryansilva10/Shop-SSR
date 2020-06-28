//function to handle product deletion client-sie
const deleteProduct = (btn) => {
    //access input id and store it
    const prodId = btn.parentNode.querySelector('[name=productId').value;
    const csrf = btn.parentNode.querySelector('[name=_csrf').value;

    //get article based on btn inside of it
    const productElement = btn.closest('article')

    //send request from client
    fetch('/admin/product/' + prodId, {
        method: 'DELETE',
        headers: {
            'csrf-token': csrf
        }
    }).then(result => {
        return result.json();
    }).then(data => {
        productElement.remove();
    }).catch(err => {
        console.log(err);
    })
}