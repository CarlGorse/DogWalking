using DogWalkingApi.Types;
using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.DbContext {
    public class DogWalkingDbContext : Microsoft.EntityFrameworkCore.DbContext, IDogWalkingDbContext {

        public DogWalkingDbContext(DbContextOptions options) : base(options) {

        }

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Timeslot> Timeslots { get; set; }
    }
}
