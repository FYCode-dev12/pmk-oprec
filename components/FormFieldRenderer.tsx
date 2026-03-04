import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Control } from "react-hook-form";

export interface FieldConfig {
    id: string;
    type: 'short_text' | 'long_text' | 'dropdown' | 'radio' | 'checkbox' | 'file_upload' | 'date';
    label: string;
    placeholder?: string;
    required: boolean;
    options?: string[];
    helperText?: string;
}

interface FormFieldRendererProps {
    fieldConfig: FieldConfig;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
}

export function FormFieldRenderer({ fieldConfig, control }: FormFieldRendererProps) {
    return (
        <FormField
            control={control}
            name={fieldConfig.id}
            render={({ field }) => (
                <FormItem className="bg-card p-4 sm:p-6 rounded-2xl shadow-sm border-l-4 border-l-accent border-border/50 transition-all hover:shadow-md">
                    <FormLabel className="font-serif text-lg font-semibold text-foreground flex items-center gap-1">
                        {fieldConfig.label} {fieldConfig.required && <span className="text-destructive">*</span>}
                    </FormLabel>
                    {fieldConfig.helperText && (
                        <FormDescription className="text-muted-foreground mt-1 text-sm">
                            {fieldConfig.helperText}
                        </FormDescription>
                    )}
                    <div className="mt-3">
                        <FormControl>
                            {(() => {
                                switch (fieldConfig.type) {
                                    case 'short_text':
                                        return <Input placeholder={fieldConfig.placeholder} {...field} value={field.value || ''} className="bg-white" />;
                                    case 'long_text':
                                        return <Textarea placeholder={fieldConfig.placeholder} {...field} value={field.value || ''} className="min-h-[120px] bg-white resize-y" />;
                                    case 'date':
                                        return <Input type="date" {...field} value={field.value || ''} className="bg-white w-full sm:w-auto" />;
                                    case 'dropdown':
                                        return (
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="bg-white">
                                                        <SelectValue placeholder={fieldConfig.placeholder || "Pilih opsi"} />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {fieldConfig.options?.map((opt, i) => (
                                                        <SelectItem key={i} value={opt}>
                                                            {opt}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        );
                                    case 'radio':
                                        return (
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-2 mt-2"
                                            >
                                                {fieldConfig.options?.map((opt, i) => (
                                                    <FormItem key={i} className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value={opt} className="text-primary border-primary" />
                                                        </FormControl>
                                                        <FormLabel className="font-sans font-normal cursor-pointer text-base">
                                                            {opt}
                                                        </FormLabel>
                                                    </FormItem>
                                                ))}
                                            </RadioGroup>
                                        );
                                    case 'checkbox':
                                        if (fieldConfig.options && fieldConfig.options.length > 0) {
                                            return (
                                                <div className="flex flex-col space-y-3 mt-2">
                                                    {fieldConfig.options.map((opt) => (
                                                        <FormItem key={opt} className="flex flex-row items-start space-x-3 space-y-0">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value?.includes(opt)}
                                                                    onCheckedChange={(checked) => {
                                                                        return checked
                                                                            ? field.onChange([...(field.value || []), opt])
                                                                            : field.onChange(field.value?.filter((value: string) => value !== opt));
                                                                    }}
                                                                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="font-sans font-normal text-base cursor-pointer">
                                                                {opt}
                                                            </FormLabel>
                                                        </FormItem>
                                                    ))}
                                                </div>
                                            );
                                        }
                                        return (
                                            <div className="flex flex-row items-center space-x-3 space-y-0 mt-2">
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={field.onChange}
                                                    className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                                />
                                                <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                    {fieldConfig.placeholder || "Setuju"}
                                                </span>
                                            </div>
                                        );
                                    case 'file_upload':
                                        return (
                                            <div className="flex flex-col gap-2 w-full mt-2">
                                                <Input
                                                    type="file"
                                                    accept=".pdf,application/pdf"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) field.onChange(file);
                                                    }}
                                                    className="bg-white file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 cursor-pointer w-full text-muted-foreground"
                                                />
                                                {field.value instanceof File && (
                                                    <div className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 bg-green-50 text-green-700 text-xs font-medium rounded-md border border-green-200 shadow-sm w-fit">
                                                        <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="truncate max-w-[200px]">{field.value.name}</span>
                                                        <span className="opacity-75">
                                                            ({(field.value.size / (1024 * 1024)).toFixed(2)} MB)
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    default:
                                        return <Input {...field} value={field.value || ''} className="bg-white" />;
                                }
                            })()}
                        </FormControl>
                    </div>
                    <FormMessage className="mt-2 text-destructive font-medium" />
                </FormItem>
            )}
        />
    );
}
