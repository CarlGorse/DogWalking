using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.DbContext {

    public class DogWalkingDbContext : Microsoft.EntityFrameworkCore.DbContext, IDogWalkingDbContext {

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Timeslot> Timeslots { get; set; }

        public DogWalkingDbContext(DbContextOptions options, bool prePopulate = true) : base(options) {

            if (!prePopulate) {
                return;
            }

            PopulateDbSets();
            SaveChanges();
        }

        private void PopulateDbSets() {
            PopulateTimeslots();
            PopulateBookings();
        }

        private void PopulateTimeslots() {

            var dateTime = DateOnly.FromDateTime(DateTime.Now);

            Timeslots.AddRange(new Timeslot[] {
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(8, 0), EndTime= new TimeOnly(8,15), Status= TimeslotStatus.NotBookable },
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(8, 15), EndTime= new TimeOnly(8,30), Status= TimeslotStatus.NotBookable },
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(8,30), EndTime= new TimeOnly(8,45), Status= TimeslotStatus.NotBookable },
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(8,45), EndTime= new TimeOnly(9,0), Status= TimeslotStatus.NotBookable },
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(9,0), EndTime= new TimeOnly(9,15), Status= TimeslotStatus.NotBookable },
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(9,15), EndTime= new TimeOnly(9,30), Status= TimeslotStatus.NotBookable },
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(9,30), EndTime= new TimeOnly(9,45), Status= TimeslotStatus.Bookable },
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(9,45), EndTime= new TimeOnly(10,0), Status= TimeslotStatus.Bookable },
              new Timeslot { Date= dateTime, StartTime= new TimeOnly(10,0), EndTime= new TimeOnly(10,15), Status= TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(10,15), EndTime= new TimeOnly(10,30), Status = TimeslotStatus.NotBookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(10,30), EndTime= new TimeOnly(10,45), Status = TimeslotStatus.NotBookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(10,45), EndTime= new TimeOnly(11,0), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(11,0), EndTime= new TimeOnly(11,15), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(11,15), EndTime= new TimeOnly(11,30), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(11,30), EndTime= new TimeOnly(11,45), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(11,45), EndTime= new TimeOnly(12,0), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(12,0), EndTime= new TimeOnly(12,15), Status = TimeslotStatus.NotBookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(12,15), EndTime= new TimeOnly(12,30), Status = TimeslotStatus.NotBookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(12,30), EndTime= new TimeOnly(12,45), Status = TimeslotStatus.NotBookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(12,45), EndTime= new TimeOnly(13,0), Status = TimeslotStatus.NotBookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(13,0), EndTime= new TimeOnly(13,15), Status = TimeslotStatus.NotBookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(13,15), EndTime= new TimeOnly(13,30), Status = TimeslotStatus.NotBookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(13,30), EndTime= new TimeOnly(13,45), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(13,45), EndTime= new TimeOnly(14,0), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(14,0), EndTime= new TimeOnly(14,15), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(14,15), EndTime= new TimeOnly(14,30), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(14,30), EndTime= new TimeOnly(14,45), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(14,45), EndTime= new TimeOnly(15,0), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(15,0), EndTime= new TimeOnly(15,15), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(15,15), EndTime= new TimeOnly(15,30), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(15,30), EndTime= new TimeOnly(15,45), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(15,45), EndTime= new TimeOnly(16,0), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(16,0), EndTime= new TimeOnly(16,15), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(16,15), EndTime= new TimeOnly(16,30), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(16,30), EndTime= new TimeOnly(16,45), Status = TimeslotStatus.Bookable },
              new Timeslot { Date = dateTime, StartTime = new TimeOnly(16,45), EndTime= new TimeOnly(17,0), Status = TimeslotStatus.Bookable },
            });
        }

        private void PopulateBookings() {
            Bookings.AddRange(new Booking[] {
                new Booking { TimeslotId= 7, Location= Locations.Bristol },
                new Booking { TimeslotId= 8, Location= Locations.Bristol },
                new Booking { TimeslotId= 9, Location= Locations.MidsomerNorton },
                new Booking { TimeslotId= 26, Location= Locations.Paulton },
                new Booking { TimeslotId= 27, Location= Locations.Paulton },
                new Booking { TimeslotId= 28, Location= Locations.Paulton }
            });
        }
    }
}
