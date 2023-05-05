namespace DogWalkingApi.Repositories
{
    public interface IUserSettingsRepository
    {
        IQueryable<UserSettings> Get();
    }
}