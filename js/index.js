$(function(){
    $('#txtCEP').mask('00000-000');
})

function BuscaCEP(){
    let cep = $('#txtCEP').val();
    let endPoint = `https://viacep.com.br/ws/${cep}/json/`;
    
    $.ajax({
        url: endPoint,
        type: "GET",
        beforeSend: function(){
            $('#loading').css("display","block");
            $('#containerMaster').css("display","none");
        },
        success: function(response){
            $('#loading').css("display","none");
            $('#containerMaster').css("display","block");

            console.log(response);

            $('#txtLogradouro').val(response.logradouro);
            $('#txtBairro').val(response.bairro);
            $('#txtCidade').val(response.localidade);
            $('#txtEstado').val(response.uf);
            $('#txtIBGE').val(response.ibge);
        },
        error: function(){
            alert('Error favor reportar ao responsável do site');
        }
    })
}