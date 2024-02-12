﻿using Microsoft.AspNetCore.Mvc;
using E_Shop.Services;
using E_Shop.DTOs;
using System.Collections.Generic;
using E_Shop.Data;

namespace E_Shop.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : BaseController
    {
        private readonly IHomeService _homeService;

        public HomeController(IHomeService homeService, ApplicationDbContext context) : base(context) =>
            _homeService = homeService;

        [HttpGet]
        public IEnumerable<ShoesDTO> Get() => _homeService.GetShoes();

    }
}