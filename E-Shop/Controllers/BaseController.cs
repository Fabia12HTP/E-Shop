using E_Shop.Data;
using Microsoft.AspNetCore.Mvc;

namespace E_Shop.Controllers
{
    [ApiController]
    public class BaseController : ControllerBase 
    {
        protected readonly ApplicationDbContext Context;

        public BaseController(ApplicationDbContext context)
        {
            Context = context;
        }
    }
}