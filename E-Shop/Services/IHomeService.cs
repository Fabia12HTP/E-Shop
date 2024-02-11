using E_Shop.DTOs;
using System.Collections.Generic;

namespace E_Shop.Services
{
    public interface IHomeService
    {
        IEnumerable<ShoesDTO> GetShoes(); 
    }
}