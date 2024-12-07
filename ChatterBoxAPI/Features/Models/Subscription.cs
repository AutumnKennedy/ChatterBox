using System.ComponentModel.DataAnnotations;

namespace ChatterBoxAPI.Features.Models
{
    public class Subscription
    {
        [Key]
        public int Id { get; set; }
        public User UserId { get; set; }
        public Topic TopicId { get; set; }
    }
}
