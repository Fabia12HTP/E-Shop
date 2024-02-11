using Microsoft.AspNetCore.Mvc;
using E_Shop.Services;
using E_Shop.DTOs;
using System.Collections.Generic;
using E_Shop.Data;

namespace E_Shop.Controllers
{
    [ApiController]
    [Route("home")]
    public class HomeController : BaseController
    {
        private readonly IHomeService _homeService;

        public HomeController(IHomeService homeService, ApplicationDbContext context) : base(context) =>
            _homeService = homeService;

        [HttpGet("shoes")]
        public IActionResult GetShoes() =>
            Ok(_homeService.GetShoes()); 
    }
}