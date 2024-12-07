using System.ComponentModel.DataAnnotations;

namespace ChatterBoxAPI.Features.Dtos
{
    public class SubscriptionDto
    {
        [Key]
        public int Id { get; set; }
    }
}
