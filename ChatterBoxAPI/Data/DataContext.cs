using ChatterBoxAPI.Features.Models;
using Microsoft.EntityFrameworkCore;

namespace ChatterBoxAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //User
            modelBuilder.Entity<User>()
                .HasKey(x => x.Id);

            //Message
            modelBuilder.Entity<Message>()
                .HasKey(x => x.Id);

            //Topic
            modelBuilder.Entity<Topic>()
                .HasKey(x => x.Id);

            //Subscription
            modelBuilder.Entity<Subscription>()
                .HasKey(x => x.Id);
        }
    }
}
