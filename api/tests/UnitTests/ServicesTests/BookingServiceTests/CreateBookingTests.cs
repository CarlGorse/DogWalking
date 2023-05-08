using DogWalkingApi.Dto;
using DogWalkingApi.Enums;
using Moq;
using NUnit.Framework;

namespace UnitTests.ServicesTests.BookingServiceTests
{
    internal class CreateBookingTests
    {

        private IBookingService _bookingService = null!;
        private Mock<IUnitOfWork> _mockUnitOfWork = null!;
        private Mock<IBookingRepository> _mockBookingRepository = null!;

        [SetUp]
        public void SetUp()
        {
            _mockUnitOfWork = new Mock<IUnitOfWork>();
            _mockBookingRepository = new Mock<IBookingRepository>();
            _mockUnitOfWork.Setup(x => x.BookingRepository).Returns(_mockBookingRepository.Object);

            var mockTimeslotService = Mock.Of<ITimeslotService>();

            _bookingService = new BookingService(_mockUnitOfWork.Object, mockTimeslotService);
        }

        [Test]
        public void ValidRequest_SavedBookingHasRequestLocation()
        {
            _bookingService.CreateBooking(new CreateBookingDto { Location = Locations.MidsomerNorton });

            _mockBookingRepository.Verify(x => x.Add(It.Is<Booking>(y => y.Location == Locations.MidsomerNorton)));
        }

        [Test]
        public void ValidRequest_SavesChanges()
        {
            _bookingService.CreateBooking(new CreateBookingDto());

            _mockUnitOfWork.Verify(x => x.SaveChanges());
        }
    }
}
