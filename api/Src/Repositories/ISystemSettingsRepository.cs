namespace DogWalkingApi.Repositories
{
    public interface ISystemSettingsRepository
    {
        SystemSettingsDto Get();
        void Update(SystemSettingsDto systemSettingsDto);
    }
}