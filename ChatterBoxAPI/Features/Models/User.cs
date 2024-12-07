using System.ComponentModel.DataAnnotations;

namespace ChatterBoxAPI.Features.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ICollection<Subscription> TopicsSubscribed { get; set; }
    }
}
 