using System.ComponentModel.DataAnnotations;

namespace ChatterBoxAPI.Features.Models
{
    public class Topic
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public ICollection<Message> ? Messages { get; set; }
    }
}
