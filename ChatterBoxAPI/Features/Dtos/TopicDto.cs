using System.ComponentModel.DataAnnotations;

namespace ChatterBoxAPI.Features.Dtos
{
    public class TopicDto
    {
        [Key]
        public string Id { get; set; }
        public string Title { get; set; }
    }
}
