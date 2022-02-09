from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm


def index(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        if form.is_valid():
            message = "This e-mail acknowledges receipt of your message concerning the subject '{}'." \
                      " I will get back to you as soon as possible.\n\nCet email accuse la bonne réception de" \
                      " votre message concernant '{}'. Je reviens vers vous aussi vite que possible".format(str(request.POST['object']), str(request.POST['object']))

            user_message = "NAME: {}\nSUBJECT: {}\nMESSAGE: {}\nMAIL: {}".format(request.POST['your_name'],
                                                                                 request.POST['object'],
                                                                                 request.POST['your_message'],
                                                                                 request.POST['your_email'])

            send_mail("Accusé de réception / Acknowledgment of receipt", message, settings.EMAIL_HOST_USER,
                      [request.POST['your_email']],
                      fail_silently=False)

            send_mail("Message from Personal Site", user_message, settings.EMAIL_HOST_USER,
                      ['cyrilb38@hotmail.com'],
                      fail_silently=False)

            return HttpResponseRedirect("/thanks")
        else:
            context = {
                'form': ContactForm,
            }
            return render(request, 'portfolio2/index.html', context)
    else:
        context = {
            'form': ContactForm,
        }
        return render(request, 'portfolio2/index.html', context)


def thanks(request):
    return render(request, 'portfolio2/thanks.html')
