using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddScoped<IBookingRepository, BookingRepository>();
builder.Services.AddScoped<IBookingTimeslotRepository, BookingTimeslotRepository>();
builder.Services.AddScoped<IBookingService, BookingService>();
builder.Services.AddScoped<IDogWalkingDbContext, DogWalkingDbContext>();
builder.Services.AddScoped<ITimeslotRepository, TimeslotRepository>();
builder.Services.AddScoped<ITimeslotService, TimeslotService>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IUserSettingsRepository, UserSettingsRepository>();
builder.Services.AddScoped<IUserSettingsService, UserSettingsService>();

builder.Services.AddCors(options =>
{
    var policyName = "MyAllowedOrigins";
    options.AddPolicy(name: policyName,
                      builder =>
                      {
                          builder
                            .WithOrigins("http://localhost:3000", "https://localhost:3000", "http://localhost:7083", "https://localhost:7083")
                            .AllowAnyHeader()
                            .AllowAnyMethod();
                      });
});

builder.Services.AddMvc().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.ContractResolver = new DefaultContractResolver();
});

var configuration = new ConfigurationBuilder()
    .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
    .AddJsonFile("appSettings.json")
    .Build();

builder.Services.AddDbContext<DogWalkingDbContext>(options =>
    options.UseSqlServer(configuration.GetConnectionString("DogWalking")));

builder.Services.Configure<JsonSerializerSettings>(options =>
{
    //options.SerializerOptions.PropertyNameCaseInsensitive = false;
    options.ContractResolver = new DefaultContractResolver
    {
        NamingStrategy = new CamelCaseNamingStrategy()
    };
    //options.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
});

var app = builder.Build();

app.UseHttpsRedirection();

app.MapControllerRoute(
    name: "default",
    pattern: "api/{controller}/{action}");

app.UseCors("MyAllowedOrigins");

app.UseAuthorization();

app.Run();
