using ChatterBoxAPI.Features.Authorization;
using ChatterBoxAPI.Features.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Data;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace ChatterBoxAPI.Data
{
    public class DataContext : IdentityDbContext<User>
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        //public DbSet<Message> Messages { get; set; }
        //public DbSet<Topic> Topics { get; set; }
        //public DbSet<Subscription> Subscriptions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole
                {
                    Name = "User",
                    NormalizedName = "USER"
                },
            };
            modelBuilder.Entity<IdentityRole>().HasData(roles);

            //Message
            //modelBuilder.Entity<Message>()
            //    .HasKey(x => x.Id);

            ////Topic
            //modelBuilder.Entity<Topic>()
            //    .HasKey(x => x.Id);

            ////Subscription
            //modelBuilder.Entity<Subscription>()
            //    .HasKey(x => x.Id);
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.ConfigureWarnings(warnings =>
        //        warnings.Ignore(RelationalEventId.PendingModelChangesWarning));
        //}

    }
}
