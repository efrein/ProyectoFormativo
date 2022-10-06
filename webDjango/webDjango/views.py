from re import template
from unicodedata import name
from django.shortcuts import render
from django.core.mail import EmailMessage

from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string

def home(request):
    return render(request, 'home.html')

def contactanos(request):
    if request.method == "POST":
        subject = request.POST['introducir_asunto']
        last_name = request.POST['apellidos']
        email = request.POST['correo']
        message = request.POST['introducir_mensaje'] + "\n" + request.POST['correo']+ "\n" + request.POST['apellidos']
        #---------------------------------------------
        
        #---------------------------------------------
    
        to_email = ['mundotech.ale@gmail.com']   #Lista con el o los correos de destino
       
        send_email = EmailMessage(subject, message, to= to_email )
        send_email.send()
        
        return render(request, 'home.html')
         
    return render(request, 'contactanos.html')




def quienesSomos(request):
    return render(request, 'quienesSomos.html')


def contact(request):
    if request.method == "POST":
        name = request.POST['nombres']
        last_name = request.POST['apellidos']
        email = request.POST['correo']
        subject = request.POST['introducir_asunto']
        message = request.POST['introducir_mensaje']

        email_from=settings.EMAIL_HOST_USER

        recipient_list=["eiguedez@misena.edu.co"]
        send_mail(name, last_name, email, subject, message, recipient_list)

        return render(request, "home.html") 
    return render(request, 'contactanos.html')
