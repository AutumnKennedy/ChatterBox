﻿using System.ComponentModel.DataAnnotations;

namespace ChatterBoxAPI.Features.Dtos
{
    public class MessageDto
    {
        [Key]
        public int Id { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
