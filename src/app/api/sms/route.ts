import { NextRequest, NextResponse } from 'next/server';
import { sendSms } from '../../../lib/utils';

export async function POST(request: NextRequest) {
  try {
    const { formData } = await request.json();

    // Get phone number from environment
    const phoneNumber = process.env.TELEPHONE;
    if (!phoneNumber) {
      return NextResponse.json(
        { error: 'Phone number not configured in environment' },
        { status: 500 }
      );
    }

    // Create SMS message from form data
    const smsMessage = `New contact form submission! Email: ${formData.email}, AI: ${formData.ai}, Snack: ${formData.snack || 'N/A'}, Ideal: ${formData.ideal || 'N/A'}, Tech Stack: ${formData.techStack || 'N/A'}, Time Travel: ${formData.timeTravel || 'N/A'}, Tasks: ${formData.tasks || 'N/A'}, Projects: ${formData.projects || 'N/A'}, Worm: ${formData.worm}`;

    // Send SMS using the existing 46elks function
    const result = await sendSms(phoneNumber, smsMessage);

    if (result.success) {
      return NextResponse.json({
        success: true,
        provider: '46elks',
        message: 'SMS sent successfully',
        data: result.data
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to send SMS' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('SMS API error:', error);
    return NextResponse.json(
      { error: 'Failed to send SMS' },
      { status: 500 }
    );
  }
}