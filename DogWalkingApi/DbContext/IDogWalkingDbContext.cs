using DogWalkingApi.Types;
using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.DbContext {
    public interface IDogWalkingDbContext {
        DbSet<Booking> Bookings { get; set; }
        DbSet<Timeslot> Timeslots { get; set; }

        int SaveChanges();
    }
}