using System.ComponentModel.DataAnnotations;
using ChatterBoxAPI.Features.Models;
using Microsoft.AspNetCore.Identity;

namespace ChatterBoxAPI.Features.Authorization
{
    public class User : IdentityUser
    {
        //public ICollection<Subscription> TopicsSubscribed { get; set; }
    }
}
