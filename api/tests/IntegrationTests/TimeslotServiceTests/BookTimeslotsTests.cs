﻿using DogWalkingApi.DbContext;
using DogWalkingApi.Repositories;
using DogWalkingApi.Services;
using DogWalkingApi.Types;
using Microsoft.EntityFrameworkCore;
using NUnit.Framework;

namespace IntegrationTests.TimeslotServiceTests
{
    [TestFixture]
    public class BookTimeslotsTests
    {

        [Test]
        public void IdsHasKnownTimeslot_TimeslotHasBooking()
        {
            var options = new DbContextOptionsBuilder().UseInMemoryDatabase("DogWalking").Options;

            var dbContext = new DogWalkingDbContext(options);
            var timeslot = new Timeslot();
            dbContext.Timeslots.Add(timeslot);

            dbContext.SaveChanges();

            Assert.IsNull(dbContext.Timeslots.Single().Booking);

            var timeslotService = new TimeslotService(
                new TimeslotRepository(dbContext),
                new BookingTimeslotRepository(dbContext));

            var booking = new Booking();

            timeslotService.BookTimeslots(booking, timeslotIds: new int[] { timeslot.TimeslotId });

            Assert.AreEqual(booking, dbContext.Timeslots.Single().Booking);
        }

        /*
        [Test]
        public void IdsHasUnknownTimeslot_BookingNotAddedToAnyTimeslot()
        {
            var options = new DbContextOptionsBuilder().UseInMemoryDatabase("DogWalking").Options;

            var dbContext = new DogWalkingDbContext(options);
            var timeslot = new Timeslot();
            dbContext.Timeslots.Add(timeslot);

            dbContext.SaveChanges();

            Assert.IsNull(dbContext.Timeslots.Single().Booking);

            var timeslotService = new TimeslotService(
                new TimeslotRepository(dbContext),
                new BookingTimeslotRepository(dbContext));

            var booking = new Booking();

            timeslotService.BookTimeslots(booking, timeslotIds: new int[] { timeslot.TimeslotId });

            Assert.AreEqual(booking, dbContext.Timeslots.Single().Booking);
        }
        */
    }
}