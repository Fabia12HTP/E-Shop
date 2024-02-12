using E_Shop.Data;
using E_Shop.DTOs;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace E_Shop.Services
{
    public class HomeServiceImpl : IHomeService
    {
        private readonly ApplicationDbContext _context;

        public HomeServiceImpl(ApplicationDbContext context)
        {
            _context = context;
        }

        public IEnumerable<ShoesDTO> GetShoes()
        {
            return _context.Shoes.Select(shoe => new ShoesDTO
            {
                Id = shoe.Id,
                Name = shoe.Name,
                Description = shoe.Description,
                Price = shoe.Price,
                Rating = shoe.Rating,
                UrlPicture = shoe.UrlPicture,
                State = shoe.State,
                Like = shoe.Like
            });
        }
    }
}