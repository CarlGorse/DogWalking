using DogWalkingApi.Comparers;
using DogWalkingApi.Convertors;
using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.DbContext
{
    public class DogWalkingDbContext : Microsoft.EntityFrameworkCore.DbContext, IDogWalkingDbContext
    {
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<BookingTimeslot> BookingTimeslots { get; set; }
        public DbSet<Timeslot> Timeslots { get; set; }
        public DbSet<UserSettings> UserSettings { get; set; }

        public DogWalkingDbContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Timeslot>(builder =>
            {
                builder.Property(x => x.Date)
                    .HasConversion<DateOnlyConverter, DateOnlyComparer>();

                builder.Property(x => x.StartTime)
                    .HasConversion<TimeOnlyConverter, TimeOnlyComparer>();

                builder.Property(x => x.EndTime)
                    .HasConversion<TimeOnlyConverter, TimeOnlyComparer>();
            });

            /*
            modelBuilder.Entity<Timeslot>()
                .HasMany(x => x.BookingTimeslots)
                .WithOne(x => x.Timeslot);

            modelBuilder.Entity<Booking>()
                .HasMany(x => x.BookingTimeslots)
                .WithOne(x => x.Booking);
            */
        }
    }
}
