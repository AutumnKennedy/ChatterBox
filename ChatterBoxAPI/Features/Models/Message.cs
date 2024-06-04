using System.ComponentModel.DataAnnotations;

namespace ChatterBoxAPI.Features.Models
{
    public class Message
    {
        [Key]
        public int Id { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
