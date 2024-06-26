﻿using E_Shop.Data;
using E_Shop.DTOs;
using System.Web;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System;

namespace E_Shop.Services
{
    public class HomeServiceImpl : IHomeService
    {
        private readonly ApplicationDbContext _context;

        public HomeServiceImpl(ApplicationDbContext context)
        {
            _context = context;
        }

        public ShoesDTO? GetShoesDetail(int ShoesId)
        {
            IEnumerable<ShoesDTO> dbGuilds = _context.ShoesDTO;

            var dbGuild = dbGuilds.FirstOrDefault(ShoesDTO => ShoesDTO.Id == ShoesDTOId);

            return dbGuild == null ? null : MapGuildToDto(dbGuild);
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
                UrlPicture = FormatUrl(shoe.UrlPicture),
                State = shoe.State,
                Like = shoe.Like
            }); ;
        }

        private static string? FormatUrl(string? url)
        {
            if (url != null)
            {
                return url.Replace("\\", "/");
            }
            return url;
        }
    }
}
