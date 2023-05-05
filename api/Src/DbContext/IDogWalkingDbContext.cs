using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.DbContext
{
    public interface IDogWalkingDbContext
    {
        DbSet<Booking> Bookings { get; set; }
        DbSet<BookingTimeslot> BookingTimeslots { get; set; }
        DbSet<Timeslot> Timeslots { get; set; }
        DbSet<UserSettings> UserSettings { get; set; }

        int SaveChanges();
    }
}