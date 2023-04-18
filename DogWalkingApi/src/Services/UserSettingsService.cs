namespace DogWalkingApi.Services
{

    public class UserSettingsService : IUserSettingsService
    {

        private readonly IUserSettingsRepository _UserSettingsRepository;

        public UserSettingsService(IUserSettingsRepository userSettingsRepository)
        {
            _UserSettingsRepository = userSettingsRepository;
        }

        public IReadOnlyCollection<UserSettings> Get(string username)
        {
            return _UserSettingsRepository
                .Get()
                .Where(x => x.Username == username)
                .ToList()
                .AsReadOnly();
        }
    }
}
