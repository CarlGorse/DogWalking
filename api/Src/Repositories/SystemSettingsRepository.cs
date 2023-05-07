namespace DogWalkingApi.Repositories
{
    public class SystemSettingsRepository : ISystemSettingsRepository
    {

        private readonly IDogWalkingDbContext _DogWalkingDbContext;

        public SystemSettingsRepository(IDogWalkingDbContext dbContext)
        {
            _DogWalkingDbContext = dbContext;
        }

        public SystemSettingsDto Get()
        {
            var systemSettings = new SystemSettingsDto();
            systemSettings.Status = (SystemStatus)(int.Parse(_DogWalkingDbContext.SystemSettings.Single(x => x.SystemSettingsId == 1).Value));
            return systemSettings;
        }

        public void Update(SystemSettingsDto systemSettingsDto)
        {
            var entity = _DogWalkingDbContext.SystemSettings.Single(x => x.SystemSettingsId == 1);
            entity.Value = ((int)systemSettingsDto.Status).ToString();
            _DogWalkingDbContext.SaveChanges();
        }
    }
}
