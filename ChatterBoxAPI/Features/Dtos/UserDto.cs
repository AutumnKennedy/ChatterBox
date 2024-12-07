using System.ComponentModel.DataAnnotations;

namespace ChatterBoxAPI.Features.Dtos
{
    public class UserDto
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
    }
}
