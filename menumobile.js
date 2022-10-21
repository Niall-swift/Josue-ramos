async function checkPermission(){
        return await Notification.requestPermission()
}

async function sendNotifition(){
    await checkPermission().tren(isAllowed => {
        if(!isAllowed){
            return;
        }
    new Notification('Josué ramos',{
        body: 'atualisação disponivel !'
    })

    })
}
