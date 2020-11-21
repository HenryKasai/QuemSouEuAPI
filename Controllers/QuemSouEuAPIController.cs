using Microsoft.AspNetCore.Mvc;
using QuemSouEuAPI.Models;

namespace QuemSouEuAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuemSouEuAPIController : ControllerBase
    {
        [HttpGet]
        public QuemSouEuAPIModel Get()
        {
            var resultado = new QuemSouEuAPIModel
            {
                nome = "Henry",
                sobrenome = "Kasai",
                url = "https://github.com/HenryKasai",
            };
            return resultado;
        }
    }
}