namespace DogWalkingApi.Services
{
    public interface IUserSettingsService
    {
        IReadOnlyCollection<UserSettings> Get(string username);
    }
}