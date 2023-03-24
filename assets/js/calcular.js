function interes(tasaMensual, mes, pagoMensual, montoSolicitado){

    var vInteres = 0;
    var amortiza = montoSolicitado;
    for (var i =1; i <= mes ; i++) {
        vInteres = (amortiza *(tasaMensual /100));
        amortiza = amortiza - (pagoMensual - vInteres);
    }
    return vInteres;
}