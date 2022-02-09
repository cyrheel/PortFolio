from django import forms


class ContactForm(forms.Form):
    your_name = forms.CharField(label="Name",
                                max_length=64,
                                widget=forms.TextInput())
    object = forms.CharField(label="Object",
                             max_length=64,
                             widget=forms.TextInput())
    your_email = forms.EmailField(label="Email",
                                  max_length="128",
                                  widget=forms.EmailInput())
    your_message = forms.CharField(label="Message",
                                   widget=forms.Textarea())
