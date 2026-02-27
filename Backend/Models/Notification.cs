namespace SentraSence.Api.Models;

public class Notification
{
    public Guid NotificationId { get; set; }

    public Guid AlarmId { get; set; }
    public AlarmEvent AlarmEvent { get; set; } = null!;

    public Guid ContactId { get; set; }
    public TrustedContact TrustedContact { get; set; } = null!;

    public string Channel { get; set; } = null!; // sms / push / email
    public string Status { get; set; } = null!;

    public DateTime? SentAt { get; set; }

    public string? ProviderMessageId { get; set; }
    public string? ErrorMessage { get; set; }

    public int AttemptCount { get; set; }
}