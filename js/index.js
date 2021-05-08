$(function(){
    $('#txtCEP').mask('00000-000');
})

function BuscaCEP(){
    let cep = $('#txtCEP').val();
    let endPoint = `https://viacep.com.br/ws/${cep}/json/`;
    
    $.ajax({
        url: endPoint,
        type: "GET",
        success: function(response){
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