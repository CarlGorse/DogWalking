using Microsoft.EntityFrameworkCore;

namespace DogWalkingApi.DbContext
{

    public class DogWalkingDbContext : Microsoft.EntityFrameworkCore.DbContext, IDogWalkingDbContext
    {

        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Timeslot> Timeslots { get; set; }
        public DbSet<UserSetting> UserSettings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Timeslot>()
                .HasOne(x => x.Booking)
                .WithMany(x => x.Timeslots);

            modelBuilder.Entity<Booking>()
                .HasMany(x => x.Timeslots)
                .WithOne(x => x.Booking);
        }

        public DogWalkingDbContext(DbContextOptions options, bool prePopulate = true) : base(options)
        {

            if (!prePopulate)
            {
                return;
            }

            PopulateDbSets();
        }

        private void PopulateDbSets()
        {
            PopulateTimeslots();
            PopulateBookings();
        }

        private void PopulateTimeslots()
        {

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

            SaveChanges();
        }

        private void PopulateBookings()
        {
            Bookings.AddRange(new Booking[] {
                new Booking { TimeslotIds = new int[] { 7, 8 }, Location= Locations.Bristol },
                new Booking { TimeslotIds = new int[] { 9, 10 }, Location= Locations.MidsomerNorton },
                new Booking { TimeslotIds = new int[] { 26, 27, 28 }, Location= Locations.Paulton }
            });

            SaveChanges();
        }

        public void PopulakteUserSettings()
        {
            UserSettings.AddRange(new UserSetting[] {
                new UserSetting {
                    SelectService = new Types.UserSettings.SelectService { TypeOfWalk = TypesOfWalk.Any },
                    AboutYou = new Types.UserSettings.AboutYou { Name= "Carl", PostCode = "NA1 1AA", LocationDetails = "I live on a hill." },
                    AboutYourDogs = new Types.UserSettings.AboutYourDogs { Dogs = new Dog[] {
                        new Dog { Name = "Alfie", Breed = Breed.Cockapoo, Size = Size.Medium, CanBeOffLead = CanBeOffLead.Either },
                        new Dog { Name = "River", Breed = Breed.KingCharles, Size = Size.Small, CanBeOffLead = CanBeOffLead.No, Comments = "Shits a lot." },
                    } },
                    Options = new Types.UserSettings.Options { CanOtherDogJoin = true }
                }
            }
            );
        }
    }
}
