namespace DogWalkingApi.Repositories
{

    public class UserSettingsRepository : IUserSettingsRepository
    {

        private readonly IDogWalkingDbContext _DbContext;

        public UserSettingsRepository(IDogWalkingDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        public IQueryable<UserSettings> Get()
        {
            return _DbContext.UserSettings;
        }
    }
}
